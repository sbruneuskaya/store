import React, {useEffect, useState} from "react";
import styles from './styles.module.scss';
import axios from "axios";
import {Stack, Pagination, PaginationItem,} from "@mui/material";
import {Link} from 'react-router-dom';
import Header from "../../header";

// import {useLocation} from "react-router";


const BASE_URL = 'http://hn.algolia.com/api/v1/search?';

const Search = (props) => {

    // let location = useLocation();
    // console.log(location)
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState('Ikea');
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(
            ({data}) => {
                setPosts(data.hits)
                setPageCount(data.nbPages)

                if (data.nbPages < page) {
                    setPage(1)
                }
            }
        );
    }, [query, page]);

    return (
        <div className={styles.container}>
            <Header style="none"/>
            <div className={styles.wrapper}>
                <div>
                    <input className={styles.inputSearch}
                           placeholder="Search"
                           type="text"
                           onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className={styles.content}>
                        {posts.map((post) => (
                            <div className={styles.contentItem}>
                                <a key={posts.objectID} href={post.url}>
                                    {post.title || post.story_title}
                                </a>
                            </div>
                        ))}
                    </div>
                    <Stack spacing={2} fillWidth>
                        {!!pageCount && (
                            <Pagination
                                page={page}
                                count={pageCount}
                                color="secondary"
                                showFirstButton
                                showLastButton
                                onChange={(_, num) => setPage(num)}
                                renderItem={(item) => (
                                    <PaginationItem
                                        component={Link}
                                        to={`?link=${item.page}`}
                                        {...item}
                                    />
                                )}
                            />
                        )}
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Search;