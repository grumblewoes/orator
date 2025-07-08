#!/bin/bash

python -m grpc_tools.protoc -I protos --python_out=./protos/generated --grpc_python_out=./protos/generated ./protos/chat.proto

# also gotta change the import to absolute path. Idk why but me and the tool are too dumb to figure it out