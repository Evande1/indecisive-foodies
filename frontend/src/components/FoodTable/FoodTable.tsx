import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { Box } from '@mui/system';
import { Key, useState } from 'react';
import EditForm from './EditForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import config from '../../config.json';
import axios from "axios";

type mealData = {
  _id: string;
  meal: string;
  category: string;
};

type tableItems = {
  meals: mealData[];
};

type Order = 'asc' | 'desc';

const url = config.server.url;

// sorting func 

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  console.warn(stabilizedThis);
  return stabilizedThis.map((el) => el[0]);
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

//can create an object in the future to store the header names
//useStyles to make the theme for the table (future)

const FoodTable = ({ meals }: tableItems) => {
  const pages = [5, 10, 25];
  const headCells = [
    { id: 'dish', label: 'Dish', disabledSorting: false},
    { id: 'category', label: 'Category', disabledSorting: false},
    {id:'actions', label:'Actions',disabledSorting: true}
  ];

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(pages[page]);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof any>('');
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [mealToEdit, setMealToEdit] = useState<mealData>(meals[0]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortRequest = (property: keyof any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const openInPopup = (item: mealData) => {
    console.log(item);
      setMealToEdit(item);
      setOpenPopup(true);
  }

  const deleteItem = (id: string) => {
    axios.delete(`${ url }/meal/${ id }`)
        .then((response) => {
          window.location.reload();
        })
        .catch(error => console.log(`Error: ${ error }`))
  }

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  {headCell.disabledSorting? (
                    headCell.label
                  ) : (
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={() => {
                        handleSortRequest(headCell.id);
                      }}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(meals, getComparator(order, orderBy))
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((item: mealData) => (
                <TableRow key={item._id}>
                  <TableCell>{item.meal}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                      <EditIcon  onClick={() => {openInPopup(item)}}/>
                      <DeleteIcon onClick={() => {deleteItem(item._id)}}/>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                onPageChange={handlePageChange}
                page={page}
                rowsPerPageOptions={pages}
                rowsPerPage={rowsPerPage}
                count={meals.length}
                component="div"
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      {mealToEdit != null ?  <EditForm openPopup={openPopup} setOpenPopup={setOpenPopup} mealData={mealToEdit}/> : ''}

    </Box>
  );
};

export default FoodTable;
