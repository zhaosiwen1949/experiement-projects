#!/bin/bash

# 首先需要检测当前目录的状态，是否有新的文件需要commit
# 同时需要获取相应的远程分支

git_remote_branch=$(git status 2>/dev/null | grep -oP "(?<=您的分支领先 'origin/).*(?=')");
git_status=$(git status 2> /dev/null | tail -n1) || $(git status 2> /dev/null | head -n 2 | tail -n1);

# 检查是否有远程分支
# 如果有，则进行后续过程
# 如果没有，则抛错

if [[ "$git_remote_branch" != "" ]]; then
  if [[ "$git_status" != "无文件要提交，干净的工作区" ]]; then
    git add -A;
    git commit -m "自动触发yarn build，生成提交文件";
  fi
  git push origin HEAD:refs/for/$git_remote_branch;
else
  exit 1;
fi