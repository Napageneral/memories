import os
import boto3


def download_models():
    modelsPath = os.getcwd() + '/models/'
    s3 = boto3.client('s3',
         aws_access_key_id="AKIAVCLQCUGXEXH7MNDD",
         aws_secret_access_key= "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")

    if not os.path.isfile(modelsPath + "1epoch.pth"):
        s3.download_file('ulmfitbucket', '1epoch.pth', modelsPath+'1epoch.pth')



