import { Tools } from "@ca-plant-list/tools/Tools";
import { DataLoader } from "@ca-plant-list/ca-plant-list/DataLoader";
import { Taxa } from "@ca-plant-list/ca-plant-list/Taxa";

DataLoader.load( Tools.getOptions().data );

Tools.run( Taxa );