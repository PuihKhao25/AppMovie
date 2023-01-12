import axios from 'axios';
import {useEffect, useState} from 'react';
import API_URL from '../Services/API';

const useGetBanner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  const getInfoUser = async () => {
    setLoading(true)
    return await axios
      .get(`${API_URL}/api/QuanLyPhim/LayDanhSachBanner`)
      .then(({data}) => {
        setData(data?.content);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  };
  useEffect(() => {
    getInfoUser();
  }, []);

  const banners = data;
  return {
    banners,
    loading,
  };
};

export default useGetBanner;
