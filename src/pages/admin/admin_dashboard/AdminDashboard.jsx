import React, { useState } from "react";
import { toast } from "react-toastify";
import { createProductApi } from "../../../api/api";

const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);

  const [productNameError, setProductNameError] = useState("");
  const [productDescriptionError, setProductDescriptionError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [productCategoryError, setProductCategoryError] = useState("");
  const [productImageError, setProductImageError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  var validate = () => {
    if (productName.trim() === "") {
      setProductNameError("Product Name is required");
      return false;
    }
    if (productDescription.trim() === "") {
      setProductDescriptionError("Product Description is required");
      return false;
    }
    if (productPrice.trim() === "") {
      setProductPriceError("Product Price is required");
      return false;
    }
    if (productCategory.trim() === "") {
      setProductCategoryError("Product Category is required");
      return false;
    }
    if (productImage === "") {
      setProductImageError("Product Image is required");
      return false;
    }
    return true;
  };

  // Handle SUbmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the form
    if (!validate()) {
      return;
    }

    // make a form data (txt, file)
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productImage", productImage);

    // call the api
    createProductApi(formData).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="">
            <h1>Admin Dashboard</h1>
          </div>
          <div className="">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Product
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form action="/">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Product Name
                        </label>
                        <input
                          className="form-control"
                          placeholder="Product Name"
                          onChange={(e) => setProductName(e.target.value)}
                        />
                        {productNameError && (
                          <p className="text-danger">{productNameError}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label for="productDescription" className="form-label">
                          Product Description
                        </label>
                        <textarea
                          className="form-control"
                          onChange={(e) =>
                            setProductDescription(e.target.value)
                          }
                          rows="3"
                        ></textarea>
                        {productDescriptionError && (
                          <p className="text-danger">
                            {productDescriptionError}
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Product Price
                        </label>
                        <input
                          className="form-control"
                          placeholder="Product Price"
                          onChange={(e) => setProductPrice(e.target.value)}
                        />
                        {productPriceError && (
                          <p className="text-danger">{productPriceError}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Product Category
                        </label>
                        <select
                          className="form-control"
                          onChange={(e) => setProductCategory(e.target.value)}
                        >
                          <option value="1">Flower</option>
                          <option value="2">Category 2</option>
                          <option value="3">Category 3</option>
                        </select>
                        {productCategoryError && (
                          <p className="text-danger">{productCategoryError}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                          onChange={(e) => setProductImage(e.target.value)}
                        >
                          Product Image
                        </label>
                        <input
                          onChange={handleImageChange}
                          className="form-control"
                          type="file"
                        />
                        {productImageError && (
                          <p className="text-danger">{productImageError}</p>
                        )}
                      </div>
                      {previewImage && (
                        <div className="mb-2">
                          <img
                            src={previewImage}
                            className="img-fluid rounded"
                            alt="product"
                          />
                        </div>
                      )}
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://th.bing.com/th/id/R.892bb645c09c766efcc5bc4d0c93094a?rik=slmcvUaa5yToAw&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image.jpg&ehk=c2raFC95S12P3OL0%2fwdM60ro3oUxsSEajkuGEN%2fsjbo%3d&risl=1&pid=ImgRaw&r=0"
                  alt="product"
                  width="50px"
                />
              </td>
              <td>Product 1</td>
              <td>$100</td>
              <td>Created a product</td>
              <td>Category 1</td>
              <td>
                <a href="/edit" className="btn btn-primary">
                  Edit
                </a>
                <a href="/delete" className="btn btn-danger">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
