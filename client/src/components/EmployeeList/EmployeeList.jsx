import DeleteBtn from "../Button/DeleteBtn";
import UpdateBtn from "../Button/UpdateBtn";

const TableHeader = () => {
	return (
		<thead>
			<tr className="sticky top-0 z-[1] child-td:py-1 child-td:px-4 bg-[#0876b8] text-white font-extrabold text-center">
				<td>ID</td>
				<td>FIRST NAME</td>
				<td>LAST NAME</td>
				<td>AGE</td>
				<td>SEX</td>
				<td>PHONE NUMBER</td>
				<td>ACTIONS</td>
			</tr>
		</thead>
	);
};

const EmptyTable = () => {
	return (
		<tr className="text-3xl font-extrabold absolute grid items-center text-center w-full h-64">
			<td>EMPTY TABLE</td>
		</tr>
	);
};

export default function EmployeeDataList({
	employees,
	setDeleteId,
	setDeleteModal,
	setUpdateId,
	setUpdateModal,
}) {
	return (
		<div className="overflow-y-scroll overflow-x-hidden scroll-width h-[18.5rem] border-collapse my-8 text-base w-full shadow-xl child-th:py-1 child-th:px-4 max-h-min">
			<table className="w-full">
				<TableHeader />
				<tbody className="b-bottom b-color-even b-color-last relative">
					{employees.length <= 0 ? (
						<EmptyTable />
					) : (
						employees.map((values) => {
							const { id, firstName, lastName, age, sex, phoneNumber } = values;
							return (
								<tr
									className="font-semibold child-td:py-1 child-td:px-4 child-td:text-center"
									key={id}
								>
									<td>{id}</td>
									<td>{firstName}</td>
									<td>{lastName}</td>
									<td>{age}</td>
									<td>{sex}</td>
									<td>{phoneNumber}</td>
									<td>
										<UpdateBtn
											setUpdateModal={setUpdateModal}
											setUpdateId={setUpdateId}
											updateId={id}
										/>
										<DeleteBtn
											setDeleteModal={setDeleteModal}
											setDeleteId={setDeleteId}
											deleteId={id}
										/>
									</td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
		</div>
	);
}
