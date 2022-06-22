class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }        
        sacar(valor){
            if (valor > this._saldo){
                return "Operação Negagada";
            } 
            this._saldo = this._saldo - valor;

            return this._saldo
        }

        depositar(valor){
            this._saldo = this._saldo + valor;

            return this._saldo
        }
        
        set saldo(valor){
            this._saldo = valor;
        } 

        get saldo(){
            return this._saldo;
        }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo='Corrente';
        this.cartaoCredito = cartaoCredito;
    }
    
    set cartaoCredito(valor){ 
        this._cartaoCredito = valor;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupança";
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.cartaoCredito = 'Universitaria';
    }
    sacar(valor){
        if(valor > 500){
            return 'Operação Negada.';
        }
        this._saldo = this_saldo - valor;
    }
}