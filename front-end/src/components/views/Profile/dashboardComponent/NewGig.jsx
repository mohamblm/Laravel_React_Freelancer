import { useState, useEffect } from 'react'
// Mock categories - replace with actual data
import './NewGig.css'

import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../../../../api/axios';



export default function NewGig({ isModalOpen, CloseModal }) {
    // formdata for stock data of new gigs
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: null,
        category_id: null,
        subcategory_id: null,
        semicategory_id: null,
        images_url: [],
    });
    // fetch categories for fill select tags
    const { categories } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('hhahowa')
        if (categories.length === 0) {
            console.log('dlhl')
            const fetchCategories = async () => {
                await axiosClient.get('categories')
                    .then((res) => {
                        console.log(res.data)
                        dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: res.data })
                        console.log(categories)
                    })
                    .catch((err) => { console.log(err) })
            };

            fetchCategories();
        }
    }, []);

    const [titleError, setTitleError] = useState("");
    const [categoryError, setCategoryError] = useState(null);
    const [subcategoryError, setSubCategoryError] = useState(null);
    const [semicategoryError, setSemiCategoryError] = useState(null);
    const [descriptionError, setDescriptionerror] = useState(false);
    const [priceError, setPriceError] = useState(false);






    const handleInputChange = (e) => {
        // Validation for title
        if (e.target.name === 'title' && /[^a-zA-Z0-9\s]/.test(e.target.value)) {
            setTitleError("Title can contain letters and numbers only");
            const updatedInput = e.target.value.slice(0, -1);
            // setTitle(updatedInput);
            setFormData({
                ...formData,
                [e.target.name]: updatedInput,
            });
        } else {

            setTitleError("");
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
        // controller Errors of select tags (category ,subcategory, semicategory)
        if (e.target.name === 'category_id') {
            setCategoryError(null)
        }
        if (e.target.name === 'subcategory_id') {
            setSubCategoryError(null)
        }
        if (e.target.name === 'semicategory_id') {
            setSemiCategoryError(null)
        }
        if (e.target.name === 'description') {
            setDescriptionerror(false)
        }
        if (e.target.name === 'price') {
            setPriceError(false)
        }

    };

    const [imagePreviews, setImagePreviews] = useState([]); // To store live image previews
    const handleImageChange = (e) => {
        const files = e.target.files;
        const selectedImages = Array.from(files);

        setFormData(prevState => ({
            ...prevState,
            images_url: [...prevState.images_url, ...selectedImages]  // Add selected files to the array
        }));

        // Create image previews for live display
        const previews = selectedImages.map(file => URL.createObjectURL(file));
        setImagePreviews(prevPreviews => [...prevPreviews, ...previews]);
    };


    // indecate errors and send data
    const handleSubmit =async (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        if (formData.category_id === null) {
            setCategoryError("You should select one category!")
        }
        else if (formData.subcategory_id === null) {
            setSubCategoryError("You should select one subcategory!")

        }
        else if (formData.semicategory_id === null) {
            setSemiCategoryError("You should select type of your service!")
        }
        else if (formData.description.length < 150) {
            setDescriptionerror(true)
        }
        else if (+formData.price < 5) {
            setPriceError(true)
        } else {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('price', formData.price);
            data.append('category_id', formData.category_id);
            data.append('subcategory_id',  formData.subcategory_id);
            data.append('semicategory_id', formData.semicategory_id);

            // Append images to FormData
            formData.images_url.forEach((image, index) => {
                data.append(`images_url[${index}]`, image);
            });
            await axiosClient.post('/service',data)
            .then((res)=>{
                // console.log(res.data)
                dispatch({ type: 'NOTIFICATION', payload: res.data.message })
                setTimeout(() => { dispatch({ type: 'STOP_NOTIFICATION' }) }, 5000)
                CloseModal()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    };
    return (
        <div>
            {isModalOpen && (
                <div className="modal show shadow d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div
                        className="modal-dialog modal-lg "
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Create New Gig</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={CloseModal}
                                />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    {/* Gig Title Section */}
                                    <div className="mb-4">
                                        <label htmlFor="gigTitle" className="form-label gig-title-label">
                                            Gig title
                                        </label>
                                        <p className="text-muted gig-description">
                                            As your Gig storefront, your{" "}
                                            <span className="fw-bold mb-1">title is the most important place</span> to
                                            include keywords that buyers would likely use to search for a service
                                            like yours.
                                        </p>
                                        <input
                                            type="text"
                                            id="gigTitle"
                                            name='title'
                                            className={`form-control mb-1 gig-input ${titleError || formData.title.length > 80 ? "is-invalid" : ""} ${formData.title.length > 30 && formData.title.length < 81 ? "is-valid" : ''}`}
                                            placeholder="I will create for you any custom website you want"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                        />

                                        <div className='d-flex m-0 justify-content-end'>
                                            {titleError && <div className="invalid-feedback d-flex" style={{ width: '50%' }}>{titleError}</div>}
                                            <div className="text-muted mt-1 text-end gig-char-count" style={{ width: '50%' }}>
                                                {formData.title.length} / 80 max
                                            </div>
                                        </div>
                                    </div>
                                    {/* Category Section */}
                                    <div className="mb-4">
                                        <label className="form-label gig-title-label">Category</label>
                                        <p className="text-muted gig-description mb-1">
                                            Choose the category and sub-category most suitable for your Gig.
                                        </p>
                                        <div className="d-flex category-select-wrapper">
                                            <select className={`form-select gig-select me-3 ${categoryError === null ? '' : 'is-invalid'}`} name='category_id' onChange={handleInputChange} required>
                                                <option key="0" value={null}>SELECT YOUR SERVICE CATEGORY</option>
                                                {
                                                    categories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                            <select className={`form-select gig-select  ${subcategoryError === null ? '' : 'is-invalid'}`} name='subcategory_id' onChange={handleInputChange} required>
                                                <option value={null}>SELECT YOUR SERVICE SUBCATEGORY</option>
                                                {
                                                    categories
                                                        .filter((category) => category.id == formData.category_id)
                                                        .flatMap((category) => category.subcategories)
                                                        .map((subcategory) => (
                                                            <option key={subcategory.id} value={subcategory.id}>
                                                                {subcategory.name}
                                                            </option>)
                                                        )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    {/* Service type  Section */}
                                    <div className="mb-4">
                                        <label className="form-label gig-title-label">Service Type</label>
                                        <div className="d-flex category-select-wrapper">
                                            <select className={`form-select gig-select me-3 ${semicategoryError === null ? '' : 'is-invalid'}`} name='semicategory_id' onChange={handleInputChange} required>
                                                <option value={null}>SELECT TYPE OF YOUR SERVICE</option>
                                                {categories
                                                    .filter((category) => category.id == formData.category_id)
                                                    .flatMap((category) => category.subcategories)
                                                    .filter((subcategory) => subcategory.id == formData.subcategory_id)
                                                    .flatMap((subcategory) => subcategory.semicategories)
                                                    .map((semicategory) => (
                                                        <option key={semicategory.id} value={semicategory.id}>
                                                            {semicategory.name}
                                                        </option>)
                                                    )}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label gig-title-label">Description</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
                                            rows={4}
                                            required
                                        ></textarea>
                                        <div className="text-muted mt-2 text-end">
                                            <span className={`${formData.description.length >= 150 ? 'text-success' : ''} ${descriptionError ? 'text-danger' : ''}`}>{formData.description.length}/ 150 Characters</span>
                                        </div>
                                        {/* <div className="rich-text-editor">
                                           
                                            
                                        </div> */}
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label gig-title-label">Price ($)</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price ? formData.price : ''}
                                            onChange={handleInputChange}
                                            className={`form-control ${priceError ? 'is-invalid' : ''}`}
                                            step="0.01"
                                            min="0"
                                            required
                                        />
                                        {priceError && <p className='text-danger'>the rice should be more then 5$</p>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label gig-title-label">Images</label>
                                        <p className="text-muted mb-1 gig-description mb-1">
                                            Upload <b>tow</b> to <b>five</b> images.
                                        </p>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            className="form-control"
                                            onChange={handleImageChange}
                                            required
                                        />
                                        {/* Live Image Previews (Displayed as Cards) */}
                                        {imagePreviews.length > 0 && (
                                            <div className="mb-3">
                                                <h5>Selected Images</h5>
                                                <div className="d-flex flex-wrap">
                                                    {imagePreviews.map((image, index) => (
                                                        <div className="col-md-4 col-sm-6" key={index}>
                                                            <div className="card p-0 position-relative cursor-pointer " style={{ width: '150px' }}>
                                                                {/* Close button */}
                                                                <span
                                                                    className=" position-absolute top-0 end-0 mx-2 fs-4 cursor-pointer"
                                                                    onClick={() => {
                                                                        setFormData(prevState => {
                                                                            const newFiles = prevState.images_url.filter((_, i) => i !== index);
                                                                            return { ...prevState, images_url: newFiles };
                                                                        });
                                                                        setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
                                                                    }}
                                                                    title="Remove Image"
                                                                >
                                                                    X
                                                                </span>
                                                                <img src={image} alt={`Gallery ${index + 1}`} className="card-img-top" />
                                                                {/* <div className="card-body">
                                                                    <p className="card-text text-center">Image {index + 1}</p>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {categoryError && <p className='alert alert-danger '>{categoryError}</p>}
                                    {subcategoryError && <p className='alert alert-danger'>{subcategoryError}</p>}
                                    {semicategoryError && <p className='alert alert-danger'>{semicategoryError}</p>}
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn bg-secondary p-2"
                                        onClick={CloseModal}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary p-2">
                                        Create Gig
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div >
                // --------------------

            )
            }
        </div >
    )
}
