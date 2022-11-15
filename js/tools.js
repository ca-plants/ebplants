import { Tools } from "@ca-plant-list/tools/Tools";
import { DataLoader } from "@ca-plant-list/ca-plant-list";
import { Taxa } from "@ca-plant-list/ca-plant-list";

const options = Tools.getCommandLineOptions( DataLoader.getOptionDefs() );

await DataLoader.load( options );

Tools.run( options, Taxa );