<template>
  <div class="container">
    <h2>Cadastrar Produto</h2>
    <hr>
    <form action="">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">Preço</label>
        <input type="text" id="price" class="form-control">
      </div>
      <div class="form-group">
        <label for="desc">Descrição</label>
        <textarea id="desc" class="form-control"></textarea>
      </div>

      <p>Fotos</p>
      <div class="row">
        <div class="col-4">
          <div class="card">
            <img src="https://via.placeholder.com/350x169?text=Nova Imagem" class="card-img-top" alt="">
            <div class="card-footer">
              <button class="btn btn-primary" type="button">Nova imagem</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name:"ProdutoForm"
}
</script>
