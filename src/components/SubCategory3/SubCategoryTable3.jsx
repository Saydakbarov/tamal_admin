import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Delete, Edit } from '@mui/icons-material';
import AddSubCategory1 from './AddSubCategory3';
import UpdateSubCategory3 from './UpdateSubCategory3';
import DeleteSubCategory3 from './DeleteSubCategory3';
// import ModalCategory from "./ModalCategory";
// import UpdateCategory from "./UpdateCategory";
// import DeleteCategory from "./DeleteCategory";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export default function SubCategoryTable3() {
	const [subCategoryData3, setSubCategoryData3] = useState([]);
	const [updateCategory, setUpdateCategory] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		fetch(
			'https://tamal.onrender.com/api/v1/thirdsubcategories?limit=20&offset=' +
				offset,
			{
				method: 'GET',
				headers: {},
			},
		)
			.then((res) => res.json())
			.then((data) => setSubCategoryData3(data.data))
			.catch((e) => console.log(e));
	}, [offset]);

	console.log(subCategoryData3);

	return (
		<Box sx={{ p: 3 }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='center'>English</StyledTableCell>
							<StyledTableCell align='center'>Russian</StyledTableCell>
							<StyledTableCell align='center'>Uzbek</StyledTableCell>
							<StyledTableCell align='center'></StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{subCategoryData3.map((row, i) => (
							<StyledTableRow key={row.second_sub_category_id}>
								<StyledTableCell align='center'>
									{row.third_sub_category_name_en}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{row.third_sub_category_name_ru}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{row.third_sub_category_name_uz}
								</StyledTableCell>
								<StyledTableCell align='center'>
									<Box
										sx={{ display: 'flex', gap: '10px' }}
										component={'div'}
										onClick={() => setUpdateCategory(row)}>
										<UpdateSubCategory3 data={updateCategory} />
										<Box>
											<DeleteSubCategory3 id={updateCategory} />
										</Box>
									</Box>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<div className='pagination__btnbox'>
				<button
					className='prev_btn add__btn'
					onClick={() => setOffset(Number(offset) - 50)}
					disabled={offset === 0 ? true : false}>
					Prev
				</button>
				<button
					className='next_btn add__btn'
					onClick={() => setOffset(Number(offset) + 50)}
					disabled={subCategoryData3.length >= 50 ? false : true}>
					Next
				</button>
			</div>

			<AddSubCategory1 />
		</Box>
	);
}
