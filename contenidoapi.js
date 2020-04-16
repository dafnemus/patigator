{
  "id": "0f688d38-07a3-437a-b081-a1f96d261a5e", "name": "Patigator Firebase", "description": null, "auth": null, "events": null, "variables": [], "order": [], "folders_order": ["59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "1163f965-d716-4800-b791-601a21ddc14c"], "protocolProfileBehavior": [], "folders":
  [{ "id": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "name": "Audios", "description": "", "auth": null, "events": null, "collection": "0f688d38-07a3-437a-b081-a1f96d261a5e", "folder": null, "order": ["9a519c1b-b5f7-43ff-8fe0-fd7bd4becb7d", "b77cdfc6-7fb9-4669-9bff-8b3e7c0b1353", "a40aae85-192b-40a3-a328-cea9bd500d59", "f059b069-d8f4-447f-9449-9ba20597e088", "b9570404-5442-47a6-b1c0-1a138c80b6a1", "9eda7706-7265-4e4a-aae0-aebeb1f15a5f", "fcd8aa2e-5376-417d-9e17-1c73e46dde8e"], "folders_order": [], "protocolProfileBehavior": [], "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "folderId": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918" },
  { "id": "1163f965-d716-4800-b791-601a21ddc14c", "name": "Categories", "description": "", "auth": null, "events": null, "collection": "0f688d38-07a3-437a-b081-a1f96d261a5e", "folder": null, "order": ["4035b78c-a51e-437d-872a-03cbcf60b8c6", "4dc3d394-6475-49e3-b10a-f9a9dd236993", "9546a843-c7d7-4914-b969-73f365b1ccad"], "folders_order": [], "protocolProfileBehavior": [], "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "folderId": "1163f965-d716-4800-b791-601a21ddc14c" }], "requests":
  [{ "id": "4035b78c-a51e-437d-872a-03cbcf60b8c6", "name": "Get Categories", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/categories", "description": "", "data": null, "dataOptions": null, "dataMode": null, "headerData": null, "method": "GET", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "1163f965-d716-4800-b791-601a21ddc14c", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] },
  { "id": "4dc3d394-6475-49e3-b10a-f9a9dd236993", "name": "Get Specific Category", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/categories\/87912111-c1c0-4939-bc48-ba1ec7529043", "description": "", "data": null, "dataOptions": null, "dataMode": null, "headerData": null, "method": "GET", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "1163f965-d716-4800-b791-601a21ddc14c", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] },
  { "id": "9546a843-c7d7-4914-b969-73f365b1ccad", "name": "Save Category", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/categories", "description": "", "data": [{ "key": "name", "value": "Electronica", "description": "", "type": "text", "enabled": true }], "dataOptions": null, "dataMode": "params", "headerData": null, "method": "POST", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "1163f965-d716-4800-b791-601a21ddc14c", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] },
  { "id": "9a519c1b-b5f7-43ff-8fe0-fd7bd4becb7d", "name": "Get Audios", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/audios", "description": "", "data": null, "dataOptions": null, "dataMode": null, "headerData": null, "method": "GET", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] }, { "id": "9eda7706-7265-4e4a-aae0-aebeb1f15a5f", "name": "Thumbs down", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/audios\/4a7558e2-508a-48e0-a9b1-36e3c20b853e\/thumbsDown", "description": "", "data": null, "dataOptions": null, "dataMode": null, "headerData": null, "method": "PUT", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] },
  { "id": "a40aae85-192b-40a3-a328-cea9bd500d59", "name": "Save Audio", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/audios", "description": "", "data": [{ "key": "name", "value": "Com Truise - Flightwave", "description": "", "type": "text", "enabled": true }, { "key": "audio", "value": "\/Users\/ioji\/Desktop\/Com Truise - Flightwave.mp3", "description": "", "type": "file", "enabled": true }, { "key": "image", "value": "\/Users\/ioji\/Desktop\/cover.png", "description": "", "type": "file", "enabled": true }, { "key": "categories[0]", "value": "87912111-c1c0-4939-bc48-ba1ec7529043", "description": "", "type": "text", "enabled": true }, { "key": "categories[1]", "value": "ecf486e1-cbd4-49be-ac70-2159b5230f41", "description": "", "type": "text", "enabled": true }], "dataOptions": { "raw": { "language": "json" } }, "dataMode": "params", "headerData": [{ "key": "Content-Type", "name": "Content-Type", "value": "application\/json", "description": "", "type": "text" }], "method": "POST", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "headers": "Content-Type: application\/json\n", "pathVariables": [] },
  { "id": "b77cdfc6-7fb9-4669-9bff-8b3e7c0b1353", "name": "Get Specific Audio", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/audios\/4a7558e2-508a-48e0-a9b1-36e3c20b853e", "description": "", "data": null, "dataOptions": null, "dataMode": null, "headerData": null, "method": "GET", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] }, { "id": "b9570404-5442-47a6-b1c0-1a138c80b6a1", "name": "Thumbs up", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/audios\/4a7558e2-508a-48e0-a9b1-36e3c20b853e\/thumbsUp", "description": "", "data": null, "dataOptions": null, "dataMode": null, "headerData": null, "method": "PUT", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] }, { "id": "f059b069-d8f4-447f-9449-9ba20597e088", "name": "Modify Audio", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/audios\/4a7558e2-508a-48e0-a9b1-36e3c20b853e", "description": "", "data": [{ "key": "name", "value": "Modify", "description": "", "type": "text", "enabled": true }], "dataOptions": { "raw": { "language": "json" } }, "dataMode": "params", "headerData": [{ "key": "Content-Type", "name": "Content-Type", "value": "application\/json", "description": "", "type": "text" }], "method": "PUT", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "headers": "Content-Type: application\/json\n", "pathVariables": [] },
  { "id": "fcd8aa2e-5376-417d-9e17-1c73e46dde8e", "name": "Play Audio", "url": "https:\/\/patigator-a220c.firebaseapp.com\/api\/audios\/4a7558e2-508a-48e0-a9b1-36e3c20b853e\/play", "description": "", "data": null, "dataOptions": null, "dataMode": null, "headerData": null, "method": "PUT", "pathVariableData": [], "queryParams": [], "auth": null, "events": null, "folder": "59a01fbb-0ee1-4998-8b6a-2a62b6aaa918", "currentHelper": null, "helperAttributes": null, "collectionId": "0f688d38-07a3-437a-b081-a1f96d261a5e", "pathVariables": [] }]
}