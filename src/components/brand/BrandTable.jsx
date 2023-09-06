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
import AddBrand from './AddBrand';
import { Link } from 'react-router-dom';
import UpdateBrand from './UpdateBrand';
import DeleteBrand from './DeleteBrand';

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

export default function BrandTable() {
	const [brandData, setBrandData] = useState([]);
	const [updateBrand, setUpdateBrand] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		fetch(
			'https://tamal.onrender.com/api/v1/brands?limit=100&offset=' + offset,
			{
				method: 'GET',
				headers: {},
			},
		)
			.then((res) => res.json())
			.then((data) => setBrandData(data.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<Box sx={{ p: 3 }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='center'>Title</StyledTableCell>
							<StyledTableCell align='center'>Img</StyledTableCell>
							<StyledTableCell align='center'></StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{brandData.map((row, i) => (
							<StyledTableRow key={row.sub_category_id}>
								<StyledTableCell align='center'>
									{row.brand_name}
								</StyledTableCell>
								<StyledTableCell align='center'>
									<a href={row.brand_images_url}>Img url</a>
								</StyledTableCell>
								<Box
									sx={{ display: 'flex', gap: '10px' }}
									component={'div'}
									onClick={() => setUpdateBrand(row)}>
									<UpdateBrand data={updateBrand} />
									<Box>
										<DeleteBrand id={updateBrand} />
									</Box>
								</Box>
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
					disabled={brandData.length >= 50 ? false : true}>
					Next
				</button>
			</div>

			<AddBrand />
		</Box>
	);
}
