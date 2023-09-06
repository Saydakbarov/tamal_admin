import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Login() {
	const handleSubmit = (e) => {
		const { email, password } = e.target.elements;
		// setEmail(email);
		// setPassword(password);
		e.preventDefault();

		fetch('https://tamal.onrender.com/api/v1/admin/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				admin_email: email.value,
				admin_password: password.value,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status === 200) {
					localStorage.setItem('token', data.token);
					localStorage.setItem(
						'user',
						JSON.stringify(data.data.admin_email),
					);
					window.location.reload();
				}
			})
			.catch((e) => alert(e));
	};

	return (
		<Box
			sx={{
				maxWidth: '500px',
				margin: '0 auto',
				mt: 20,
				p: 3,
				border: '1px solid blue',
				borderRadius: '5px',
			}}>
			<Typography
				sx={{ fontWeight: '600', textAlign: 'center', fontSize: '30px' }}>
				Login
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label='Email'
					name='email'
					fullWidth
					required
					sx={{ mt: 2 }}
				/>
				<TextField
					label='Password'
					type='password'
					name='password'
					fullWidth
					required
					sx={{ mt: 2 }}
				/>

				<Button
					type='submit'
					variant='contained'
					color='primary'
					sx={{ mt: 2 }}
					fullWidth>
					Send
				</Button>
			</form>
		</Box>
	);
}
