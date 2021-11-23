import axios from 'axios';
export const originErp = 'http://app.hoplong.com/';

export const callApiSignIn = async (username, password) => {
    const resquest = await axios.get(`${originErp}api/Api_NhanVien/LoginERP/${username}/${password}`)
    return resquest.data
};

export const callApiProfile = async (username) => {
    const resquest = await axios.get(`${originErp}api/Api_NhanVien/GetChiTietNhanVien/${username}`)
    return resquest.data
};

