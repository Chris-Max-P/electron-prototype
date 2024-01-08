import fs from "fs";
import path from "path";

function createDirectories() {

}

function writeJsonFile(fileName, object) {
  console.log(`Writing data to ${fileName} ...`);
  fs.writeFileSync(fileName, JSON.stringify(object, null, 2), (error) => {
    if (error) {
      console.error('An error has occurred while writing the file ', error);
      return;
    }
    console.log('Data written successfully to disk as .json file.');
  });
}

function readJson(path) {
  console.log(`Reading data from ${path} ...`);
  try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    console.log(`Reading succesfull.`);
    return data;
  } catch (error) {
    console.error(`Reading failed: ${error.message}`);
    return undefined;
  }
}

function deleteFile(path) {
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log(`Deleted file: ${path}`)
    } else {
      console.log("Could not delete file: " + path + " because it does not exist.")
    }
  } catch (error) {
    console.error(`Deleting of ${path} failed: ${error.message}`);
  }
}

async function emptyDirectory(directory) {
  if (fs.existsSync(directory)) {
    await fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        try {
          fs.unlinkSync(path.join(directory, file));
        } catch (e) {

        }
      }
    });
    console.log("Emptied directory " + directory);
  } else {
    console.log("Did not empty directory " + directory + " because it does not exist.");
  }
}