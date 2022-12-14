import { useContext } from "react";
import { DeleteQuery } from "../../data/Data";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { GetValueContext } from "../../contexts/Contexts";

function DeleteData() {
	const { deleteId, setDeleteModal } = useContext(GetValueContext);
	return (
		<div className="animate-BgModal fixed z-10 flex justify-center items-center w-screen h-screen bg-black/50 ">
			<div className="animate-ConModal bg-slate-50 relative flex flex-col p-7 w-96 h-48 rounded-xl shadow-2xl">
				<CloseIcon
					className="text-red-600 absolute z-10 right-6 top-6 cursor-pointer"
					onClick={() => {
						setDeleteModal(false);
					}}
				/>

				<h1 className="text-xl font-semibold inline-block mb-3">
					Delete Curent Row
				</h1>
				<p className="text-lg font-medium text-center my-auto mx-0">
					Do you want to delete the curent row?
				</p>

				<footer className="inline-flex justify-between mt-auto">
					<Button
						className="w-[49%] h-9 text-2xl text-[#fff] rounded-lg cursor-pointer"
						variant="contained"
						size="small"
						onClick={() => {
							setDeleteModal(false);
						}}
					>
						Cancel
					</Button>
					<Button
						className="w-[49%] h-9 text-2xl text-[#fff] rounded-lg cursor-pointer"
						variant="contained"
						size="small"
						color="error"
						onClick={() => {
							DeleteQuery(deleteId);
							setDeleteModal(false);
						}}
					>
						Yes, Delete
					</Button>
				</footer>
			</div>
		</div>
	);
}

export default DeleteData;
