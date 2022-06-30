import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from './styles.module.scss'

export default function BasicPagination() {
    return (
        <div className={styles.pagination}>
            <Stack spacing={2} >
                <Pagination count={10} color="secondary"/>
            </Stack>
        </div>
    );
}