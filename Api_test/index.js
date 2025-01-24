document.addEventListener("DOMContentLoaded", () => {
    const productForm = document.getElementById("productForm");
  
    productForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const sellingPrice = document.getElementById("sellingPrice").value;
      const productName = document.getElementById("productName").value;
      const category = document.getElementById("category").value;
  
      // Create an object for the form data
      const productData = {
        sellingPrice: sellingPrice,
        productName: productName,
        category: category,
      };
  
      // Post the data to the API in JSON format
      axios.post("https://crudcrud.com/api/74479e581ee043c2b7470d054f709a85/detailss", productData,
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set content type
          },
        }
      ).then((response) => {
        console.log("Data posted successfully:", response.data);
        alert("Product added successfully!");
      }).catch((error) => {
        console.error("Error posting data:", error);
        alert("Failed to add product. Please try again.");
      });
  
      // Clear the form fields
      productForm.reset();
    });
    
    const productList = document.getElementById("productList");

    function fetchAndDisplayData() {
        axios.get("https://crudcrud.com/api/74479e581ee043c2b7470d054f709a85/detailss").then((response) => {  
           console.log(response.data)
            productList.innerHTML = "";
      
            // Create a structure to hold categorized data
           let movies=[];
           let electricitys=[];
           let foods=[]
          
           let categorizedData={
            movie: movies,
            electricity:electricitys,
            food:foods
           }

           console.log(categorizedData)
            // Categorize the products
            response.data.forEach((product) => {
                if(product.category === "Movie"){
                    movies.push(product)
                }else if(product.category === "Electricity"){
                    electricitys.push(product)
                }else if(product.category === "Food"){
                    foods.push(product)
                }
              });

            
      
            // Display products category-wise
            for (const [category, products] of Object.entries(categorizedData)) {
              // Add category heading
              const categoryHeading = document.createElement("h3");
              categoryHeading.textContent = category.charAt(0).toUpperCase() + category.slice(1);
              productList.appendChild(categoryHeading);
      
              // Create a list for the category
              const categoryList = document.createElement("ul");
              categoryList.className = "list-group";
              products.forEach((product) => {
                displayProductOnScreen(product, categoryList);
              });
              productList.appendChild(categoryList);
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
      
      // Function to display a single product in the given list
      function displayProductOnScreen(product, categoryList) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.textContent = `${product.sellingPrice} - ${product.productName} - ${product.category}`;
      
        // Add a delete button for each product
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteProduct(product._id, listItem);
      
        listItem.appendChild(deleteButton);
        categoryList.appendChild(listItem);
      }
      
      // Function to delete a product
      function deleteProduct(productId, listItem) {
        axios.delete(`https://crudcrud.com/api/74479e581ee043c2b7470d054f709a85/detailss/${productId}`)
          .then(() => {
            listItem.remove();
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
      
      // Fetch and display data when the page loads
      fetchAndDisplayData();
      
  });
  