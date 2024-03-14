var sachs = [
    {
        tacgia: 'Harper Lee',
        tieuDe: 'To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    },
    {
        tacgia: 'Ray Bradbury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false
    }
]
 sachs.forEach(function(sach){
    console.log(sach.tacgia);
    console.log(sach.tieuDe);
   console.log(sach.trangthai);
  console.log(sach.namXuatBan);
  })
for (i in sachs) {
    console.log(
      `${i} Tiêu đề: ${sachs[i].tieuDe} 
        Tác giả: ${sachs[i].tacgia}
        Năm xuất bản: ${sachs[i].namXuatBan} 
        Trạng Thái: ${sachs[i].trangthai? 'con' : 'het'}
        `);
    } 


