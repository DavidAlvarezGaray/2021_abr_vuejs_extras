<template>
    <div
          id="compras"
          v-if="insignias >= 1"
          style="
            margin-top: 4rem;
            widht: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 5px 5px 24px 3px rgba(0, 0, 0, 0.34);
            box-shadow: 5px 5px 24px 3px rgba(0, 0, 0, 0.34);
            border-radius: 1rem;
            padding: 1rem;">
          <div style="display: block"></div>
          <div style="margin: 2rem">
            <div class="articulos_list">
              <article class="article-item">
                <div style="display: flex; justify-content: space-between">
                  <div>
                    <h2 style="color:#13962E height:2rem">
                      ¡Sigue comprando y sube de nivel!
                    </h2>
                    <h2 style="font-weight: lighter">
                      Compra en la tienda de Tenis Deportivos de Vue JS para
                      seguir subiendo de nivel y obtener beneficios geniales.
                    </h2>
                  </div>
                  <div>
                    <Trofeo/>
                  </div>
                </div>

                <div class="clearfix"></div>
              </article>
            </div>
          </div>
        </div>
</template>