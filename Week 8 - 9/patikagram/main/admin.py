from django.contrib import admin

# Register your models here.
from main.models import Post, Like, Comment

# @admin.register(Post)
class CommentInline(admin.StackedInline):
    model = Comment
    extra = 1
    readonly_fields = ('user', 'content')
    can_delete = False

    def has_add_permission(self, request, obj=None):
        return False


class LikeInline(admin.StackedInline):
    model = Like
    extra = 1
    readonly_fields = ('user', 'post')
    can_delete = False

    def has_add_permission(self, request, obj=None):
        return False


class PostAdmin(admin.ModelAdmin):
    list_display = ['id', 'author', 'created_at', 'content', 'like_comment_count']
    list_filter = ['author', 'created_at']
    search_fields = ['content']
    autocomplete_fields = ['author']
    inlines = [CommentInline, LikeInline]

    def like_comment_count(self, post):
        return f"{post.likes_count} - {post.comments_count}"


class LikeAdmin(admin.ModelAdmin):
    list_display = ['id', 'post', 'user']
    list_filter = ['post', 'user', 'created_at']
    search_fields = ['post', 'user']
    autocomplete_fields = ['post', 'user']


class CommentAdmin(admin.ModelAdmin):
    list_display = ['id', 'post', 'user', 'created_at', 'content']
    list_filter = ['post', 'user', 'created_at']
    search_fields = ['content']
    autocomplete_fields = ['post', 'user']


admin.site.register(Post, PostAdmin)
admin.site.register(Like, LikeAdmin)
admin.site.register(Comment, CommentAdmin)
