module.exports = {
  moduleNameMapper: {
    '\.(css|less|sass|scss)$': 'identity-obj-proxy',
    './theme/fonts.css': 'identity-obj-proxy',
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFiles": [
    "./setupTests.js"
  ]
};