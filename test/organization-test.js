// organization-test.js
//
// Test the organization module
//
// Copyright 2012, E14N https://e14n.com/
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

var assert = require("assert"),
    vows = require("vows"),
    databank = require("databank"),
    URLMaker = require("../lib/urlmaker").URLMaker,
    modelBatch = require("./lib/model").modelBatch,
    Databank = databank.Databank,
    DatabankObject = databank.DatabankObject;

var suite = vows.describe("organization module interface");

var testSchema = {
    pkey: "id",
    fields: ["_created",
             "_uuid",
             "author",
             "content",
             "displayName",
             "downstreamDuplicates",
             "id",
             "image",
             "likes",
             "links",
             "objectType",
             "published",
             "replies",
             "shares",
             "summary",
             "updated",
             "upstreamDuplicates",
             "url"],
    indices: ["_uuid", "url"]
};

var testData = {
    "create": {
        displayName: "General Motors",
        url: "http://www.gm.com/",
        summary: "Great big car company"
    },
    "update": {
        summary: "Great big car and truck company"
    }
};

suite.addBatch(modelBatch("organization", "Organization", testSchema, testData));

suite["export"](module);
