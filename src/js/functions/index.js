export function handleBrowserTitleChange(title, icon) {
    document.title = title
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '../../assets/img/'+icon+'.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
}
