# sellaci-frontend

Synchronize data with cloud storage

```
gsutil -m rsync -R . gs://sellaci.com
gsutil rm gs://bucket/\*.git\*
```

We need to exclude some files