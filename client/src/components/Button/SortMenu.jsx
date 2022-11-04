import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import { Button, Menu, MenuItem } from "@mui/material";

export default function SortMenuBtn({ setSortOptions }) {
	const [anchorEl, setAnchorEl] = useState(null),
		open = Boolean(anchorEl);

	const handleClick = (e) => setAnchorEl(e.currentTarget);

	const handleClose = (event) => {
		const sortValue = event.target.getAttribute("value");
		sortValue !== null ? setSortOptions(sortValue) : null;
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				sx={{ width: 150, padding: 1 }}
				id="basic-button"
				startIcon={<SortIcon />}
				variant="contained"
				aria-controls={open ? "basic-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				Sort
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose} value="fnameASC">
					First Name (ASC) A-Z
				</MenuItem>
				<MenuItem onClick={handleClose} value="fnameDESC">
					First Name (DESC) Z-A
				</MenuItem>
				<MenuItem onClick={handleClose} value="lnameASC">
					Last Name (ASC) A-Z
				</MenuItem>
				<MenuItem onClick={handleClose} value="lnameDESC">
					Last Name (DESC) Z-A
				</MenuItem>
				<MenuItem onClick={handleClose} value="ageASC">
					Age (ASC) 1-99
				</MenuItem>
				<MenuItem onClick={handleClose} value="ageDESC">
					Age (DESC) 99-1
				</MenuItem>
			</Menu>
		</>
	);
}