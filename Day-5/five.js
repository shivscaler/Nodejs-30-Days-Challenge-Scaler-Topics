var path = require('path')

const {sourceMapsEnabled} = require('process');


function checkFileExtension(filePath, expectedExtension) {
    // Implementation
    var extname=path.extname(filePath);
    if(extname!=expectedExtension) {
        console.log(
            "file does not the expected extension: " + expectedExtension+ "Actual: " + extname
        );
    }
    console.log("File has the expected extension: " + expectedExtension);
}
checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png