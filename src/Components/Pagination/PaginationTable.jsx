import { Box, Pagination } from '@mui/material'
import { useEffect, useState } from 'react';
import service from '../../services';

const pageSize = 0;

export default function PaginationTable(setData) {

    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    });
    useEffect(() => {
        service.getData({from: pagination.from, to: pagination.to}).then(response => {
            setPagination({...pagination, count: response.count});

            setData(response.data);
        });
    },[pagination.from, pagination.to]);

    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page -1) * pageSize + pageSize;

        setPagination({...pagination, from: from, to: to});
    }
    return (
        <Box justifyContent={"center"} alignItems="center" display="flex"
            sx={{
                margin: "20px px"
            }}
            >
                <Pagination
                    count={Math.ceil(pagination.count / pageSize)}
                    onChange={handlePageChange}
                />
        </Box>
    )
}


