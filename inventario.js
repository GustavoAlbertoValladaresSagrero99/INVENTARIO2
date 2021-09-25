export default class Inventario
{
    constructor()
    {
        this.productos = new Array();
    }

    _burbuja = (lista) => {
        var n, i, k, aux;
        n = lista.length;

        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (lista[i].getCode() > lista[i + 1].getCode()) {
                    aux = lista[i];
                    lista[i] = lista[i + 1];
                    lista[i + 1] = aux;
                }
            }
        }
    }

    agregar(producto)
    {
        if(this._buscarPosicion(producto.getCode()) > -1)
        {
            return false;
        }

        this.productos.push(producto);
        
        this._burbuja(this.productos);

        console.log(this.productos);
        return true;
    }

    eliminar(codigo)
    {
        let pos = this._buscarPosicion(codigo);
        if(pos > -1)
        {
            for(let i=pos; i < this.productos.length -1; i++)
            {
                this.productos[i] = this.productos[i+1];
            }
            this.productos.pop();
            return true;
        }
        return false;
    }

    _buscarPosicion(codigo)
    {
        for(let i=0; i < this.productos.length && this.productos[i].getCode() <= codigo; i++)
            if (this.productos[i].getCode() == codigo)
                return i;
        return -1;
    }

    buscar(codigo)
    {
        console.log(codigo)
        let pos = this._buscarPosicion(codigo);
        console.log(pos)
        if(pos > -1)
            return this.productos[pos];
        return null;
    }

    listar(table)
    {
        table.innerHTML = '';
        for(let i = 0; i < this.productos.length; i++) 
        {
            let row = table.insertRow(-1);
            let cellCode = row.insertCell(0);
            let cellName = row.insertCell(1);
            let cellUnit = row.insertCell(2);
            let cellCost = row.insertCell(3);
            let cellTotal = row.insertCell(4); 
            
            cellCode.innerHTML = this.productos[i].getCode();
            cellName.innerHTML = this.productos[i].getName();
            cellUnit.innerHTML = this.productos[i].getUnit();
            cellCost.innerHTML = this.productos[i].getCost();
            cellTotal.innerHTML = this.productos[i].getTotalCost();
        }
    }

    listarInverso(table)
    {
        table.innerHTML = '';
        for(let i = this.productos.length - 1; i >= 0; i--) 
        {
            let row = table.insertRow(-1);
            let cellCode = row.insertCell(0);
            let cellName = row.insertCell(1);
            let cellUnit = row.insertCell(2);
            let cellCost = row.insertCell(3);
            let cellTotal = row.insertCell(4); 
            
            cellCode.innerHTML = this.productos[i].getCode();
            cellName.innerHTML = this.productos[i].getName();
            cellUnit.innerHTML = this.productos[i].getUnit();
            cellCost.innerHTML = this.productos[i].getCost();
            cellTotal.innerHTML = this.productos[i].getTotalCost();
        }
    }
}