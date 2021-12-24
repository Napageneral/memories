import os
import boto3


def download_models():
    modelsPath = os.getcwd() + '/models/'
    s3 = boto3.client('s3',
         aws_access_key_id="KEY_ID",
         aws_secret_access_key= "ACCESS_KEY")

    if not os.path.isfile(modelsPath + "1epoch.pth"):
        s3.download_file('ulmfitbucket', '1epoch.pth', modelsPath+'1epoch.pth')



