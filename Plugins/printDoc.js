import fileDownload from 'js-file-download';
export default async function (text, label = null, ext = '.docx') {
    //try {
        //let text = await fnc(data);
        //console.log(text);
        if (text.data instanceof Blob) {
            await fileDownload(text.data, label+(ext ?? ''), text.type);
        } else if (typeof text === 'string') {
            await fileDownload(text, label+(ext ?? ''), "application/msword");
        }
    //} catch (error) {
        //throw new Exception
        //this.$message.error(error.message);
    //}
}