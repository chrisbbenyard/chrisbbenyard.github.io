<meta name="robots" content="noindex">
<meta name="googlebot" content="noindex">






 <div id="container2" class="container2">

 <div id="row">
   
   <div class="column1">
   <div class="swiper-container">
    <div class="swiper-wrapper">    
      <div class="swiper-slide">
        <img src="{{ product.image | product_image_url: 'fullsize' }}" class="resproductimage" />
      </div>
      <div class="swiper-slide">
        <img src="{{ product.images[1] | product_image_url: 'fullsize' }}" class="resproductimage" />
      </div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next swiper-button-black"></div>
    <div class="swiper-button-prev swiper-button-black"></div>
  </div>
   </div>
  
  <div class="column2">
    
    
  <div id="product_info">
    <h2>{{ product.name }}</h2>
 
    {% if product.description != blank %} 
  
     
      <br><h3>  {{ product.description }}</h3>
    
    
   

  
    
    {% case product.status %}
    
  {% when 'active' %}
    
  <h2> <i class="fa fa-tag"> {{ product.default_price | money_with_sign }} </i></h2>
    </br> 
    
   <center> <section id="product_form">    
      
      
      <form method="post" action="/cart" accept-charset="utf8"> 
        <input type="hidden" name="utf8" value='✓'>
        {% if product.has_default_option %}
    {{ product.option | hidden_option_input }} 
        {% else %}
         {{ product.options_in_stock | options_select }} 
        {% endif %}        
    </br> 
     <center><button id="product-addtocart" name="submit" type="submit" class="probutton"><span>Add to cart</span></button></center>
     </form>
     
    
    </section></center>
    {% when 'sold-out' %}
            
       <h2> Sold Out </h2>
               
  {% when 'coming-soon' %} 
        
       <h2> Coming Soon </h2>
        
     
  {% endcase %}
            {% endif %}   
         
      
   </div>
</div>

  
  
</div>
   </div>

<script src="https://chrisbbenyard.github.io/swiper.js"></script>
  <!-- Initialize Swiper -->
  <script>
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  </script>
   