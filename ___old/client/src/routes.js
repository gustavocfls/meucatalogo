import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar';
import ProdutosCadastrar from './pages/admin/produtos/produtos.cadastrar';

import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';

// IMPORTS CLIENT 
import Home from './pages/client/home';
import ProdutosDetails from './pages/client/produtos/produtos.details'
import ProdutosEditar from './pages/admin/produtos/produtos.editar';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                
                {/* ROTA CLIENTE */}
                <Route path="/" exact component={Home} />
                <Route path="/produtos/:idProduto" exact component={ProdutosDetails} />

                {/* ROTA ADMIN */}
                <Route path="/admin" exact component={Dashboard} />
                <Route path="/admin/produtos" exact component={Produtos} />
                <Route path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                <Route path="/admin/produtos/editar/idProduto" exact component={ProdutosEditar} />

                <Route path="/admin/usuarios" exact component={Usuarios} />
                <Route path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <Route path="/admin/usuarios/editar/idUsuario" exact component={UsuarioEditar} />

            </Switch>
        </BrowserRouter>
    )
}