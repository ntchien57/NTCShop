$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});



function removeRow(id, url) {

    $.ajax({
        type: 'DELETE',
        datatype: 'JSON',
        data: {
            "id": id,
            "_token": "{{ csrf_token() }}"
        },
        url: url,
        success: function(result) {
            if (result.error == false) {
                alert(result.message);
                location.reload();
            } else {
                alert('Xóa không thành công');
            }
        },
        error: function(result) {
            console.log(result);
        }
    });
}

// Delete SLide

function getSliderId(id) {
    document.getElementById('slider-id').value = id;
    console.log(document.getElementById('slider-id').value);
}

$('.btn-delete-slide').click(function(e) {
    var id = document.getElementById('slider-id').value;
    e.preventDefault();
    swal({
            title: "Bạn chắc chắn muốn xóa không?",
            text: "Nếu xóa bạn không thể khôi phục!",
            icon: "error",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Xóa thành công", {
                    icon: "success",
                    buttons: false,
                });

                $.ajax({
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    dataType: 'JSON',
                    data: { id: id },
                    url: '/admin/sliders/destroy/' + id,
                    success: function(results) {
                        window.location.reload();
                    }
                });
            }
        });

});

// Delete Product

function getProductId(id) {
    document.getElementById('product-id').value = id;
    console.log(document.getElementById('product-id').value);
}

$('.btn-delete-product').click(function(e) {
    var id = document.getElementById('product-id').value;
    e.preventDefault();
    swal({
            title: "Bạn chắc chắn muốn xóa không?",
            text: "Nếu xóa bạn không thể khôi phục!",
            icon: "error",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Xóa thành công", {
                    icon: "success",
                });

                $.ajax({
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    dataType: 'JSON',
                    data: { id: id },
                    url: '/admin/product/destroy/' + id,
                    success: function(results) {
                        window.location.reload(true);
                    }
                });
            }
        });

});

// Delete Category

function getCategoryId(id) {
    document.getElementById('category-id').value = id;
    console.log(document.getElementById('category-id').value);
}

$('.btn-delete-category').click(function(e) {
    var id = document.getElementById('category-id').value;
    e.preventDefault();
    swal({
            title: "Bạn chắc chắn muốn xóa không?",
            text: "Nếu xóa bạn không thể khôi phục!",
            icon: "error",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Xóa thành công", {
                    icon: "success",
                });

                $.ajax({
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    dataType: 'JSON',
                    data: { id: id },
                    url: '/admin/menus/destroy/' + id,
                    success: function(results) {
                        window.location.reload(true);
                    }
                });
            }
        });

});

// Upload Images

$('#upload').change(function() {

    const form = new FormData();
    form.append('file', $(this)[0].files[0]);

    $.ajax({
        processData: false,
        contentType: false,
        type: 'POST',
        dataType: 'JSON',
        data: form,
        url: '/admin/upload/services',
        success: function(results) {
            if (results.error == false) {
                $('#image_show').html('<a href=" ' + results.url + ' " target="_blank">' +
                    '<img src=" ' + results.url + ' "  width="50px"></a>')
                $('#thumb').val(results.url);
            } else {
                alert('Upload thất bại');
            }
        }
    });
});