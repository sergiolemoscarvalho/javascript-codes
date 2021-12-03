window.downloadFile = function (url, name) {
    var link = document.createElement("a");
    link.setAttribute('download', name);
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

downloadFile("folder/name_of_archive.pdf", "name_of_archive.pdf");