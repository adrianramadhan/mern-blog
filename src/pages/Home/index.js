import React, { useEffect, useState } from 'react';
import { BlogItem, Gap } from '../../components';
import Button from '../../components/atoms/Button';
import axios from 'axios';
import './home.scss';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/v1/blog/posts?page=2&perPage=2')
      .then((result) => {
        const responseAPI = result.data;
        console.log('Data API : ', responseAPI);
        setDataBlog(responseAPI.data);
      })
      .catch((err) => console.log('Error : ', err));
  });

  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <a href="create-blog">
          <Button
            title="Create Blog"
            onClick={() => {
              history.push('/create-blog');
            }}
          />
        </a>
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              image={`http://localhost:4000/${blog.image}`}
            />
          );
        })}
      </div>

      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
