import React from 'react';
import { Gap, Link } from '../../components/atoms';
import { RegisterBg } from '../../assets';
import './detailBlog.scss';
import { useHistory } from 'react-router-dom';

const DetailBlog = () => {
  const history = useHistory();

  return (
    <div className="detail-blog-wrapper">
      <img
        className="img-cover"
        src={RegisterBg}
        alt="thumb"
      />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus
        magna dictum efficitur pellentesque. Sed eu porta ex, quis semper enim.
        Nulla nec efficitur velit, auctor feugiat quam. Donec imperdiet enim sed
        diam iaculis, id imperdiet ex placerat. Aliquam id leo in nisl bibendum
        condimentum ut et sem. Vivamus luctus nec nulla et condimentum. Sed
        cursus ullamcorper enim quis bibendum. Nulla facilisi. Etiam in augue
        eget dui ultricies pretium non et velit. Curabitur sit amet turpis
        consequat, ultricies ipsum vel, placerat lorem. Suspendisse potenti.
        Aliquam erat volutpat.
      </p>
      <Gap height={20} />
      <a href="/">
        <Link
          title="Kembali Ke Home"
          onClick={() => {
            history.push('/');
          }}
        />
      </a>
    </div>
  );
};

export default DetailBlog;
