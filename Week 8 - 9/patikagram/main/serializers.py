from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email']

class PostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(
        slug_field="username",
        read_only=True
    )

    like_comment_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = ['id', 'image', 'author', 'content',
            'likes_count', 'comments_count', 'created_at', 'like_comment_count']

    def get_like_comment_count(self, post):
        return f"Likes: {post.likes_count} - Comments: {post.comments_count}"

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['url', 'user', 'post']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['url', 'content', 'user', 'post']