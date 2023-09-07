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
import React, { useEffect, useState } from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function AddSubCategory2() {
	// Modal State Start

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	// Modal State End

	// Select State Start

	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	// Select State End

	// Select First Sub Category Start

	const [firstSelectSub, setFirstSelectSub] = React.useState('');

	const handleFirstSub = (event) => {
		setFirstSelectSub(event.target.value);
	};

	// Select First Sub Category End

	const [cetegoryData, setCategoryData] = useState([]);
	const [selectId, setSelectId] = useState(1);

	useEffect(() => {
		fetch('https://tamal.onrender.com/api/v1/categories', {
			method: 'GET',
			headers: {},
		})
			.then((res) => res.json())
			.then((data) => setCategoryData(data.data))
			.catch((e) => console.log(e));
	}, []);

	const [subCategory1Data, setSubCategory1Data] = useState([]);
	const [subCategoryId1, setSubCategoryId1] = useState(1);
	useEffect(() => {
		fetch('https://tamal.onrender.com/api/v1/subcategories/' + selectId, {
			method: 'GET',
			headers: {},
		})
			.then((res) => res.json())
			.then((data) => setSubCategory1Data(data.data))
			.catch((e) => console.log(e));
	}, [selectId]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { category_en, category_ru, category_uz } = e.target.elements;

		fetch('https://tamal.onrender.com/api/v1/secondsubcategory/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sub_category_id: subCategoryId1,
				sub_category_uz: category_uz.value,
				sub_category_ru: category_ru.value,
				sub_category_en: category_en.value,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((e) => console.log(e));
	};
	return (
		<Box sx={{ marginLeft: '0 auto', width: '100%', mt: 3 }}>
			<Button variant='contained' onClick={handleOpen}>
				Add SubCategory
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Add SubCategory
					</Typography>

					<Box component={'form'} onSubmit={handleSubmit}>
						<FormControl fullWidth sx={{ mt: 3 }}>
							<InputLabel id='demo-simple-select-label'>
								Category
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={age}
								onChange={handleChange}>
								{cetegoryData.map((v, i) => (
									<MenuItem
										key={v.category_id}
										onClick={() => setSelectId(v.category_id)}
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
								{subCategory1Data?.map((v, i) => (
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

						<TextField
							required
							fullWidth
							name='category_en'
							id='filled-basic'
							label='Category_En'
							variant='filled'
							sx={{ mt: 2 }}
						/>
						<TextField
							name='category_ru'
							fullWidth
							id='filled-basic'
							label='Category_Ru'
							variant='filled'
							sx={{ mt: 2 }}
							required
						/>
						<TextField
							name='category_uz'
							fullWidth
							id='filled-basic'
							label='Category_Uz'
							variant='filled'
							sx={{ mt: 2 }}
							required
						/>
						<Button variant='contained' sx={{ mt: 2 }} type='submit'>
							Add SubCategory
						</Button>
					</Box>
				</Box>
			</Modal>
		</Box>
	);
}
