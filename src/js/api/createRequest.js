export default function createRequest(options) {
    let metod = options.method;
    let data = options.data;
    let url = options.url;
    let callback = options.callback;

    const xhr = new XMLHttpRequest();
    xhr.open(`${metod}`, `${url}`);
    xhr.send(data);

    xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                callback(data, null);
            }  catch (err) {
                callback(null, err);
            }
        }
    })
}