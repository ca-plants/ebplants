import { DataLoader, Taxa } from "@ca-plant-list/ca-plant-list";
import { Tools } from "@ca-plant-list/tools/Tools";

const options = Tools.getCommandLineOptions( DataLoader.getOptionDefs() );

await DataLoader.load( options );

Tools.run( options, Taxa );