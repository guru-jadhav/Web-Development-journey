/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <bits/stdc++.h>
using namespace std;


int findPairs1(vector<int>& nums, int k) 
{
  int count=0;
  vector<int> ans;
  for(int i=0;i<nums.size();i++)
  {
    for(int j=i+1;j<nums.size();j++)
    {
      int element=nums[i]-nums[j];
      if((abs(element))==k)
      {
        ans.push_back(nums[i]);
        ans.push_back(nums[j]);
      }
    }
  }
  // set<int> temp(ans.begin(),ans.end(),temp.begin());
  // count=ans.size()-temp.size()-1;
  return count;
}


int findPairs(vector<int>& nums, int k) 
{
  int count=0;
  set<pair<int,int>> ans;
  for(int i=0;i<nums.size();i++)
  {
      for(int j=i+1;j<nums.size();j++)
      {
          int element=nums[i]-nums[j];
          if((abs(element))==k)
          {
              pair<int,int> temp;
              temp.first=nums[i];
              temp.second=nums[j];
              ans.insert(temp);
          }
      }
  }
  count=ans.size();
  // sort(ans.begin(),ans.end());
  for(auto& it:ans)
  {
    cout<<it.first<<","<<it.second<<endl;
  }
  return count;
}
    
string decodeMessage(string key, string message) {
        char mp[300]={0};
        char start='a';
        string ans;
        for(int i=0;i<key.size();i++)
        {
            char ch=key[i];
            if(ch!=' ' && mp[ch]==0)
            {
                mp[ch]=start;
                start++;
            }
        }

        for(int i=0;i<message.size();i++)
        {
            char ch=message[i];
            if(ch==' ')
            {
                ans.push_back(' ');
            }
            else
            {
                ans.push_back(mp[ch]);
            }
        }
        // for(auto ch:mp)
        // {
        //   cout<<"["<<int(ch)<<":"<<ch<<"]"<<" ";
        // }
        for(int i=0;i<300;i++)
        {
          char ch=mp[i];
          cout<<"["<<i<<":"<<char(i)<<";"
                    <<int(ch)<<":"<<mp[i]<<"]"<<" ";
        }
        cout<<endl;
        return ans;
    }

int main()
{
  // vector<int> arr={1,2,4,4,3,3,0,9,2,3};
  // findPairs(arr,3);
  
  string key="the quick brown fox jumps over the lazy dog";
  string message="vkbs bs t suepuv";
  cout<<decodeMessage(key,message);
  return 0;
}
