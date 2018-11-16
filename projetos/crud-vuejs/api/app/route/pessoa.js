var express = require('express');
var router = express.Router(); 
    const pessoa = require('../controller/pessoa.controller');
 
    // Criar nova Pessoa
    router.post('/', pessoa.create);
 
    // Buscar todas Pessoas
    router.get('/', pessoa.findAll);
 
    // Buscar uma única Pessoa pelo Id
    router.get('/:pessoaId', pessoa.findById);
 
    // Update Pessoa pelo Id
    router.put('/:pessoaId', pessoa.update);
 
    // Delete Pessoa pelo Id
    router.delete('/:pessoaId', pessoa.delete);

    module.exports = router;