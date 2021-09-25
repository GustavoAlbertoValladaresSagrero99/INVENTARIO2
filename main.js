import Inventario from "./inventario.js";
import Producto from "./producto.js";

class Main
{
    constructor()
    {
        this._inventario = new Inventario();
        this._msj = document.getElementById("msj");
        this._table = document.getElementById('table');
        
        document.getElementById('addButton').addEventListener('click', this._addProduct);
        document.getElementById('delete').addEventListener('click', () => { 
            let code = document.getElementById('codeSelection').value;
            this._deleteProduct(code);
        });
        document.getElementById('search').addEventListener('click', () => {
            let code = document.getElementById('codeSelection').value;
            this._searchProduct(code);
        });
        document.getElementById('listar').addEventListener('click', () => {
            this._inventario.listar(this._table);
        });
        document.getElementById('listarInv').addEventListener('click', () => {
            this._inventario.listarInverso(this._table);
        })
    
    }
    
    _getData = () => {
        let code = document.getElementById('code').value;
        let name = document.getElementById('name').value;
        let unit = document.getElementById('unit').value;
        let cost = document.getElementById('cost').value;
        return new Producto(code, name, unit, cost);
    }

    _searchProduct = (code) => {
        let prod = this._inventario.buscar(code);
        
        console.log(prod)
        if (prod) {
            console.log('yes')
            this._table.innerHTML = '';

            let row = this._table.insertRow(-1);
            let cellCode = row.insertCell(0);
            let cellName = row.insertCell(1);
            let cellUnit = row.insertCell(2);
            let cellCost = row.insertCell(3);
            let cellTotal = row.insertCell(4); 
                
            cellCode.innerHTML = prod.getCode();
            cellName.innerHTML = prod.getName();
            cellUnit.innerHTML = prod.getUnit();
            cellCost.innerHTML = prod.getCost();
            cellTotal.innerHTML = prod.getTotalCost();
        } else {
            this._msj.innerHTML = 'null';
            this._inventario.listar(this._table);
        }
    }

    _addProduct = () => {
        
        let product = this._getData();
        let success = this._inventario.agregar(product);
        console.log(success)

        if (success) {
            this._inventario.listar(this._table);
          this._msj.innerHTML = `El producto: ${product.getName()} sea agrego correctamente al inventario.`;
        } else {
            this._msj.innerHTML = `El producto: ${product.getName()} ya existe (tenemos un chingo) en el inventario.`;
        }
      };

    _deleteProduct = (codigo) => {
        this._inventario.eliminar(codigo);
    }
}

new Main();