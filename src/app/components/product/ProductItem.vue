<template>
  <section id="product-item" class="box">
    <div class="product-item__details">
      <h1 class="title is-4">
        <p>{{productItem.title}}</p>
        <span class="tag product-item__tag">123</span>
      </h1>
      <p class="product-item__description">123</p>
      <p class="product-item__created_at">
        Founded:
        <span class="has-text-weight-bold">123</span>
      </p>
      <button class="button is-primary product-item__button">Add to Cart</button>
    </div>
    <div class="product-item__image">
      <img src alt>
    </div>
  </section>
</template>


<script>
export default {
  name: "ProductItem",
  props: ["id"],
  computed: {
    productItem() {
      const res = this.$store.getters.productItemFromId(Number(this.id));
      return res;
    }
  }
};
</script>

<style scoped>
#product-item {
  display: flex;
  width: 100%;
  position: relative;
}

.return-icon {
  position: absolute;
  top: 5px;
  left: 10px;
  color: #00d1b2;
  cursor: pointer;
}

.product-item__details {
  max-width: 50%;
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-item__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-item__description {
  padding-bottom: 10px;
}

.product-item__created_at {
  font-size: 12px;
  padding-bottom: 10px;
}

.product-item__buttom {
  max-width: 150px;
}
</style>


