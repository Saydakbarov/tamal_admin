import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	padding: '40px',
	overflowX: 'scroll',
	height: '100vh',
	'&::-webkit-scrollbar': {
		display: 'none',
	},
};

export default function AddProduct({ data }) {
	// Modal State Start

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	// Modal State End

	// Select Category Start

	const [age, setAge] = React.useState('');

	const handleChangeCategory = (event) => {
		setAge(event.target.value);
	};

	// Select Category End

	// Select First Sub Category Start

	const [firstSelectSub, setFirstSelectSub] = React.useState('');

	const handleFirstSub = (event) => {
		setFirstSelectSub(event.target.value);
	};

	// Select First Sub Category End

	// Select Second Sub Category Start

	const [secondSubSelect, setSecondSubSelect] = React.useState('');

	const handleSecondSub = (event) => {
		setSecondSubSelect(event.target.value);
	};

	console.log(secondSubSelect);
	// Select Second Sub Category End

	// Select Third Sub Category Start

	const [thirdSubSelect, setThirdSubSelect] = React.useState('');

	const handleThirdSub = (event) => {
		setThirdSubSelect(event.target.value);
	};

	// Select Third Sub Category End

	// Select Third Sub Category Start

	const [brandSub, setBrandSub] = React.useState('');

	const handleBrandSub = (event) => {
		setBrandSub(event.target.value);
	};

	// Select Third Sub Category End

	const [categoryid, setCategoryId] = useState(1);

	console.log(age);

	// Category Data start
	const [categoryData, setCategoryData] = useState([]);

	useEffect(() => {
		fetch('https://tamal.onrender.com/api/v1/categories', {
			method: 'GET',
			headers: {},
		})
			.then((res) => res.json())
			.then((data) => setCategoryData(data.data))
			.catch((e) => console.log(e));
	}, []);
	// Category Data end

	// First SubCategory start
	const [subCategory1Data, setSubCategory1Data] = useState([]);
	const [subCategoryId1, setSubCategoryId1] = useState(1);
	useEffect(() => {
		fetch('https://tamal.onrender.com/api/v1/subcategories/' + categoryid, {
			method: 'GET',
			headers: {},
		})
			.then((res) => res.json())
			.then((data) => setSubCategory1Data(data.data))
			.catch((e) => console.log(e));
	}, [categoryid]);
	// First SubCategory end

	// Second Sub Category  start
	const [secondSubCategory2Data, setSecondSubCategory2Data] = useState([]);
	const [secondSubCategoryId, setSecondSubCategoryId] = useState(1);
	useEffect(() => {
		fetch(
			'https://tamal.onrender.com/api/v1/secondsubcategories/' +
				subCategoryId1,
			{
				method: 'GET',
				headers: {},
			},
		)
			.then((res) => res.json())
			.then((data) => setSecondSubCategory2Data(data.data))
			.catch((e) => console.log(e));
	}, [subCategoryId1]);
	// Second Sub Category end

	// Third Sub Category start

	const [thirdSubCategoryData, setthirdSubCategoryData] = useState([]);
	const [thirdSubCategoryId, setThirdSubCategoryId] = useState();
	useEffect(() => {
		fetch(
			'https://tamal.onrender.com/api/v1/thirdsubcategories/' +
				secondSubCategoryId,
			{
				method: 'GET',
				headers: {},
			},
		)
			.then((res) => res.json())
			.then((data) => setthirdSubCategoryData(data.data))
			.catch((e) => console.log(e));
	}, [secondSubCategoryId]);

	// Third Sub Category end

	// Brand start
	const [brandData, setBrandData] = useState([]);
	const [brandId, setBrandId] = useState();
	useEffect(() => {
		fetch('https://tamal.onrender.com/api/v1/brands?limit=1000&offset=0', {
			method: 'GET',
			headers: {},
		})
			.then((res) => res.json())
			.then((data) => setBrandData(data.data))
			.catch((e) => console.log(e));
	}, []);
	// Brand end

	const handleSubmit = (e) => {
		e.preventDefault();
		const {
			title_en,
			title_uz,
			title_ru,
			description_en,
			description_uz,
			description_ru,
			model_en,
			model_ru,
			model_uz,
			country_en,
			country_uz,
			country_ru,
			attention_en,
			attention_uz,
			attention_ru,
			price,
			img,
		} = e.target.elements;
		const formData = new FormData();

		formData.append('product_title_uz', title_uz?.value);
		formData.append('product_title_en', title_en.value);
		formData.append('product_title_ru', title_ru.value);
		formData.append('product_model_uz', model_uz.value);
		formData.append('product_model_en', model_en.value);
		formData.append('product_model_ru', model_ru.value);
		formData.append('product_information_uz', description_uz.value);
		formData.append('product_information_en', description_en.value);
		formData.append('product_information_ru', description_ru.value);
		formData.append('product_country_uz', country_uz.value);
		formData.append('product_country_en', country_en.value);
		formData.append('product_country_ru', country_ru.value);
		formData.append('product_attention_uz', attention_uz.value);
		formData.append('product_attention_en', attention_en.value);
		formData.append('product_attention_ru', attention_ru.value);
		formData.append('product_price', price.value);
		for (let i = 0; i < img.files.length; i++) {
			formData.append('photos', img.files[i]);
		}
		formData.append('brand_id', brandId);
		formData.append('category_id', categoryid);
		formData.append('sub_category_id', subCategoryId1);
		formData.append('second_sub_category_id', secondSubCategoryId);
		formData.append('third_sub_category_id', thirdSubCategoryId);

		axios
			.post('https://tamal.onrender.com/api/v1/product/add', formData, {
				headers: {
					'Content-Type': 'form-data',
					type: 'formData',
					Accept: 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			})
			.then((res) => console.log(res.data))
			.catch((error) => console.log(error));
	};

	return (
		<Box sx={{ marginLeft: '0 auto', width: '100%', mt: 3 }}>
			<Button variant='contained' onClick={handleOpen}>
				Add Product
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography
						sx={{ mt: 2 }}
						id='modal-modal-title'
						variant='h6'
						component='h2'>
						Add Product
					</Typography>

					<Box component={'form'} onSubmit={handleSubmit}>
						<Box sx={{ mt: 2, display: 'flex', gap: '30px' }}>
							<Box>
								<Typography>Add Title</Typography>
								<TextField
									required
									fullWidth
									name='title_en'
									id='filled-basic'
									label='Title_en'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='title_ru'
									id='filled-basic'
									label='Title_ru'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='title_uz'
									id='filled-basic'
									label='Title_uz'
									variant='filled'
									sx={{ mt: 2 }}
								/>
							</Box>
							<Box>
								<Typography>Add Description</Typography>
								<TextField
									required
									fullWidth
									name='description_en'
									id='filled-basic'
									label='Description_En'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='description_ru'
									id='filled-basic'
									label='Description_ru'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='description_uz'
									id='filled-basic'
									label='description_uz'
									variant='filled'
									sx={{ mt: 2 }}
								/>
							</Box>
							<Box>
								<Typography>Add Model</Typography>
								<TextField
									required
									fullWidth
									name='model_en'
									id='filled-basic'
									label='Model_en'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='model_ru'
									id='filled-basic'
									label='Model_ru'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='model_uz'
									id='filled-basic'
									label='Model_uz'
									variant='filled'
									sx={{ mt: 2 }}
								/>
							</Box>
						</Box>

						<Box sx={{ mt: 2, display: 'flex', gap: '30px' }}>
							<Box>
								<Typography>Add Country</Typography>
								<TextField
									required
									fullWidth
									name='country_en'
									id='filled-basic'
									label='Country_en'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='country_ru'
									id='filled-basic'
									label='Country_ru'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='country_uz'
									id='filled-basic'
									label='Country_uz'
									variant='filled'
									sx={{ mt: 2 }}
								/>
							</Box>
							<Box>
								<Typography>Add Attention</Typography>
								<TextField
									required
									fullWidth
									name='attention_en'
									id='filled-basic'
									label='Attention_en'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='attention_ru'
									id='filled-basic'
									label='Attention_ru'
									variant='filled'
									sx={{ mt: 2 }}
								/>
								<TextField
									required
									fullWidth
									name='attention_uz'
									id='filled-basic'
									label='Attention_uz'
									variant='filled'
									sx={{ mt: 2 }}
								/>
							</Box>
						</Box>
						<Box sx={{ width: '97%', mt: 2 }}>
							<Typography>Change Category</Typography>
							<FormControl fullWidth sx={{ mt: 2 }}>
								<InputLabel id='demo-simple-select-label'>
									Category
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={age}
									onChange={handleChangeCategory}
									fullWidth>
									{categoryData.map((v, i) => (
										<MenuItem
											key={v.category_id}
											onClick={() => setCategoryId(v.category_id)}
											value={v.category_name_ru}>
											{v.category_name_ru}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl fullWidth sx={{ mt: 2 }}>
								<InputLabel id='demo-simple-select-label'>
									Sub Category 1
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={firstSelectSub}
									onChange={handleFirstSub}
									fullWidth>
									{subCategory1Data.map((v, i) => (
										<MenuItem
											key={v.category_id}
											onClick={() =>
												setSubCategoryId1(v.sub_category_id)
											}
											value={v.sub_category_name_ru}>
											{v.sub_category_name_ru}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl fullWidth sx={{ mt: 2 }}>
								<InputLabel id='demo-simple-select-label'>
									Sub Category 2
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={secondSubSelect}
									onChange={handleSecondSub}
									fullWidth>
									{secondSubCategory2Data.map((v, i) => (
										<MenuItem
											key={v.category_id}
											onClick={() =>
												setSecondSubCategoryId(
													v.second_sub_category_id,
												)
											}
											value={v.second_sub_category_name_ru}>
											{v.second_sub_category_name_ru}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl fullWidth sx={{ mt: 2 }}>
								<InputLabel id='demo-simple-select-label'>
									Sub Category 3
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={thirdSubSelect}
									onChange={handleThirdSub}
									fullWidth>
									{thirdSubCategoryData.map((v, i) => (
										<MenuItem
											key={v.category_id}
											onClick={() =>
												setThirdSubCategoryId(
													v.third_sub_category_id,
												)
											}
											value={v.third_sub_category_name_ru}>
											{v.third_sub_category_name_ru}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl fullWidth sx={{ mt: 2 }}>
								<InputLabel id='demo-simple-select-label'>
									Brand
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={brandSub}
									onChange={handleBrandSub}
									fullWidth>
									{brandData.map((v, i) => (
										<MenuItem
											key={v.brand_id}
											onClick={() => setBrandId(v.brand_id)}
											value={v.brand_name}>
											{v.brand_name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>

						<TextField
							required
							fullWidth
							name='img'
							id='filled-basic'
							variant='filled'
							sx={{ mt: 2 }}
							type='file'
							inputProps={{
								multiple: true,
							}}
						/>

						<TextField
							required
							fullWidth
							name='price'
							id='filled-basic'
							label='Price '
							variant='filled'
							sx={{ mt: 2 }}
						/>
						<Box sx={{ pb: 3 }}>
							<Button variant='contained' sx={{ mt: 2 }} type='submit'>
								Add New
							</Button>
						</Box>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
}
