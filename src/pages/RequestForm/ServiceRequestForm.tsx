import React, { useState, useEffect } from 'react';
import './ServiceRequestForm.scss';
import axios from 'axios';
import { AxiosError } from 'axios';


function ServiceRequestForm() {
    const [supportDepartment, setSupportDepartment] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [subCategory, setSubCategory] = useState<string>('');
    const [item, setItem] = useState<string>('');
    const [requesterName, setRequesterName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const [departments, setDepartments] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [subCategories, setSubCategories] = useState<any[]>([]);
    const [items, setItems] = useState<any[]>([]);
    const [message, setMessage] = useState<string | null>(null);

    // Fetch support departments
    useEffect(() => {
        axios.get('https://localhost:7084/api/ServiceRequest/departments')
            .then(response => setDepartments(response.data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    const handleSupportDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDepartment = e.target.value;
        setSupportDepartment(selectedDepartment);
        setCategory('');
        setSubCategory('');
        setItem('');

        if (selectedDepartment) {
            axios.get(`https://localhost:7084/api/ServiceRequest/categories/${selectedDepartment}`)
                .then(response => setCategories(response.data))
                .catch(error => console.error('Error fetching categories:', error));
        } else {
            setCategories([]);
        }
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        setSubCategory('');
        setItem('');

        if (selectedCategory) {
            axios.get(`https://localhost:7084/api/ServiceRequest/subcategories/${selectedCategory}`)
                .then(response => setSubCategories(response.data))
                .catch(error => console.error('Error fetching subcategories:', error));
        } else {
            setSubCategories([]);
        }
    };

    const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSubCategory = e.target.value;
        setSubCategory(selectedSubCategory);
        setItem('');

        if (selectedSubCategory) {
            axios.get(`https://localhost:7084/api/ServiceRequest/items/${selectedSubCategory}`)
                .then(response => setItems(response.data))
                .catch(error => console.error('Error fetching items:', error));
        } else {
            setItems([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const formData = {
            requesterName,
            phone,
            department,
            supportDepartment,
            category,
            subCategory,
            item,
            subject,
            description,
        };
    
        console.log("Form Data:", formData); // Log the data to ensure correctness
    
        try {
            const response = await axios.post("https://localhost:7084/api/ServiceRequest/submit", formData);
            console.log("Form submitted successfully:", response.data);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error("Error submitting form:", error.response ? error.response.data : error);
            } else {
                console.error("An unexpected error occurred:", error);
            }
        }
        
    };
    

    return (
        <div className="service-request-form">
            <h2>Requester Details Section</h2>

            {message && <p className="message">{message}</p>} {/* Display success or error message */}

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group half-width">
                        <label htmlFor="requesterName">Requester Name</label>
                        <input type="text" id="requesterName" name="requesterName" value={requesterName} onChange={e => setRequesterName(e.target.value)} />
                    </div>

                    <div className="form-group half-width">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group full-width">
                        <label htmlFor="department">Department</label>
                        <input type="text" id="department" name="department" value={department} onChange={e => setDepartment(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group half-width">
                        <label htmlFor="supportDepartment">Support Department</label>
                        <select id="supportDepartment" name="supportDepartment" onChange={handleSupportDepartmentChange} value={supportDepartment}>
                            <option value="">-- Select Support Department --</option>
                            {departments.map(department => (
                                <option key={department.departmentId} value={department.departmentId}>{department.departmentName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group half-width">
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" onChange={handleCategoryChange} value={category} disabled={!supportDepartment}>
                            <option value="">-- Select Category --</option>
                            {categories.map(cat => (
                                <option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group half-width">
                        <label htmlFor="subCategory">Sub Category</label>
                        <select id="subCategory" name="subCategory" onChange={handleSubCategoryChange} value={subCategory} disabled={!category}>
                            <option value="">-- Select Sub Category --</option>
                            {subCategories.map(subCat => (
                                <option key={subCat.subCategoryId} value={subCat.subCategoryId}>{subCat.subCategoryName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group half-width">
                        <label htmlFor="item">Item</label>
                        <select id="item" name="item" disabled={!subCategory} value={item} onChange={e => setItem(e.target.value)}>
                            <option value="">-- Select Item --</option>
                            {items.map(item => (
                                <option key={item.itemId} value={item.itemId}>{item.itemName}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group full-width">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group full-width">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" rows={5} value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="reset" className="reset-button" onClick={() => {
                        setRequesterName('');
                        setPhone('');
                        setDepartment('');
                        setSupportDepartment('');
                        setCategory('');
                        setSubCategory('');
                        setItem('');
                        setSubject('');
                        setDescription('');
                    }}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default ServiceRequestForm;
