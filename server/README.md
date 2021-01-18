## Initialization
``` bash
// install packages
npm install

// run migrations
npx sequelize db:migrate

//rollback migrations
npx sequelize db:migrate:undo:all

//run seeders
npx sequelize db:seed:all

//.env
NODE_ENV=
PORT=
JWT_SECRET=

//database configurations
path: config/config.json

```
## API
### /api/auth
//post request to: /api/auth/login
{
    "email": "admin@mail.com",
    "password": "123456789"
}
//server response
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA4JDhUTXB0L3k5SWJNd0pGdy5PdVREWS41dGRhcFFjTVRESXNDS3Iyd29XM1FFQWEwRmZaM1NxIiwiY3JlYXRlZEF0IjoiMjAyMS0wMS0xOFQwMzo0MTo1My4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0wMS0xOFQwMzo0MTo1My4wMDBaIiwicm9sZXMiOlt7ImlkIjoxLCJuYW1lIjoiQWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIxLTAxLTE4VDAzOjQxOjUzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAxLTE4VDAzOjQxOjUzLjAwMFoiLCJSb2xlVXNlciI6eyJjcmVhdGVkQXQiOiIyMDIxLTAxLTE4VDAzOjQxOjUzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTAxLTE4VDAzOjQxOjUzLjAwMFoiLCJSb2xlSWQiOjEsIlVzZXJJZCI6MX19XSwiaWF0IjoxNjEwOTc4NTIxfQ.KIdJP-OQejRjf-J1ViTGKEsuSl37Bif7b6JVxW0mwGM",
    "message": "Login successfully."
}
//Sending the bearer token for next requests
Axios.get( 
  'http://localhost:8000/api/san-bay',
  { headers: { Authorization: 'Bearer (token here...)' } }
)
### /users
### /san-bay
### /chuyen-bay
#### nhan lich chuyen bay
//post request to: /chuyen-bay
{
    "MaChuyenBay": "CB02",
    "SanBayDi": "HAN",
    "SanBayDen": "SGN",
    "NgayGio": "2021-05-11T09:18:54.092Z",
    "ThoiGianBay": 120,
    "DanhSachHangVe": [
        { "MaHangVe": 1, "SoLuongGhe": 120 },
        { "MaHangVe": 2, "SoLuongGhe": 100 }
    ],
    "DanhSachSanBayTrungGian": [
        { "SanBayTrungGian": "DAD", "ThoiGianDung": 10, "GhiChu": "Day la ghi chu" },
        { "SanBayTrungGian": "CXR", "ThoiGianDung": 10, "GhiChu": "Day la ghi chu" }
    ]
}
//server response
{
    "MaChuyenBay": "CB02",
    "MaTuyenBay": "HAN-SGN",
    "NgayGio": "2021-05-11T09:18:54.092Z",
    "ThoiGianBay": 120,
    "TinhTrangVe": [
        {
            "MaTinhTrangVe": 3,
            "MaHangVe": 1,
            "SoLuongGhe": 120,
            "SoLuongGheTrong": 120,
            "SoGheDat": 0,
            "MaChuyenBay": "CB02"
        },
        {
            "MaTinhTrangVe": 4,
            "MaHangVe": 2,
            "SoLuongGhe": 100,
            "SoLuongGheTrong": 100,
            "SoGheDat": 0,
            "MaChuyenBay": "CB02"
        }
    ],
    "ChiTietChuyenBay": [
        {
            "MaChiTietChuyenBay": 3,
            "SanBayTrungGian": "DAD",
            "ThoiGianDung": 10,
            "GhiChu": "Day la ghi chu",
            "MaChuyenBay": "CB02"
        },
        {
            "MaChiTietChuyenBay": 4,
            "SanBayTrungGian": "CXR",
            "ThoiGianDung": 10,
            "GhiChu": "Day la ghi chu",
            "MaChuyenBay": "CB02"
        }
    ]
}
### /ve-chuyen-bay